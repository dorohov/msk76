<?php
/* Template Name: Текстовая страница */

$b_tpl = 'text-block';

the_post();
		
$Azbn->tpl('_/header', array());
$Azbn->tpl($b_tpl.'/item', array());
$Azbn->tpl('_/footer', array());