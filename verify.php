<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST) && isset($_POST['g-token'])) {
    $secretKey = '6LeaE8EpAAAAALu563lf_wOxymyDtAS0H5E4x0mx';
    $token = $_POST['g-token'];
    $ip = $_SERVER['REMOTE_ADDR'];



    $post_data = http_build_query(
                    array(
                        'secret' => $secretKey,
                        'response' => $_POST['g-recaptcha-response'],
                        'remoteip' => $_SERVER['REMOTE_ADDR']
                    )
                );

    $opts = array('http' =>
                array(
                    'method'  => 'POST',
                    'header'  => 'Content-type: application/x-www-form-urlencoded',
                    'content' => $post_data
                )
            );
    $context  = stream_context_create($opts);

    $request = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);

    $response = json_decode($request); 

    if ($response->success && $response->action == 'submit' && $response->score >= 0.5) {
        header('HTTP/1.1 200 OK');
    } else {
        header('HTTP/1.1 401 Unauthorized');
    }
    
    echo json_encode($response);
    exit();
} 
?>