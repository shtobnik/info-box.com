<?php /* Smarty version 2.6.28, created on 2014-09-09 20:18:07
         compiled from index.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'json', 'index.tpl', 18, false),)), $this); ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 //EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

	<head>
		<title>info-box task</title>
		<meta http-equiv="content-type" content="text/html; utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="content-language" content="ru">
		<link rel="stylesheet" type="text/css" href="css/main.css" media="all">
		<!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="/css/ie.css" media="all"><![endif]-->
		<!--[if lte IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<script src="js/jquery-1.9.1.min.js"></script>
		<script src="js/jquery.carouFredSel-6.2.1.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
	</head>

	<body>
		<?php echo smarty_function_json(array('file' => "/home/info-box.com/www/src/info_box.json",'assign' => 'data'), $this);?>

		
		<div class="wrapper">
			<header>
				<h1>json task</h1>
			</header>

			<div class="slider-b">

				<section class="slider-content">				
					<ul class="slider-l" id="slider">
						<?php $_from = $this->_tpl_vars['data']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['item']):
?>
							<li class="slider-l-i">
								<img src="/img/photos/<?php echo $this->_tpl_vars['item']['img']; ?>
">
								<div class="slider-l-i-content">
									<h2><?php echo $this->_tpl_vars['item']['title']; ?>
</h2>
									<div class="note">
										<p><?php echo $this->_tpl_vars['item']['description']; ?>
</p>
										<p class="gray"><?php echo $this->_tpl_vars['item']['note']; ?>
</p>								
									</div>
										<a href="#">show details</a>
								</div>
							</li>
						<?php endforeach; endif; unset($_from); ?>
					</ul>
					<div class="btns clearfix">
						<a href="#" class="btn left" id="prev"><i></i><span>Prev</span></a>
						<a href="#" class="btn right" id="next"><span>Next</span><i></i></a>
						<a href="<?php echo $this->_tpl_vars['item']['productUrl']; ?>
" class="btn right store"><span>Find a Store</span><i></i></a>
					</div>
				</section>

			</div>
		</div>
	</body>
	

</html>