<?
// обратная связь

$email = 'sales@zenit-orel.ru';

Header('Content-Type: text/html; charset=utf-8');

function __azbn_check($str = '') {
	return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

if(count($_POST['f'])) {
	$f = array();
	$f_str = array();
	
	foreach($_POST['f'] as $k => $v) {
		$f[$k] = __azbn_check($v);
		$f_str[] = '<p>'.$k.': '.$f[$k].'</p>';
	}
	
	if(1) {
		
		/*
		$headers = array();
		$headers[] = 'From: site_amd@dorohovdesign.ru';
		$headers[] = 'content-type: text/html';
		*/
		
		$body = '
		<html>
			<head></head>
			<body>
				<p>Получена новая форма</p>
				'.implode("\n", $f_str).'
			</body>
		</html>
		';
		//wp_mail((explode(',', strtr(get_field('host_email', $Azbn->post['id']), array(' '=>'',)))), 'Новая форма на сайте #'.$post_id, $body, $headers, $attachments);
		@mail($email, 'Новая форма на сайте Зенит Московская 76', $body, "From: site_zenit_msk76@dorohovdesign.com\r\nContent-type: text/html; charset=UTF-8\r\n");
		
		echo 'Спасибо! Ваша заявка принята!';
		
	}
	
} else {
	
	Header('Location: /');
	die();
	
}