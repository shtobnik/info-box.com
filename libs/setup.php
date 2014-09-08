
<?php
	require ("Smarty.class.php");
	class Smarty_Json extends Smarty {
		function Smarty_Json() {
			$this->Smarty();
			$this->template_dir = "/home/json-task.com/smarty/templates/";
			$this->compile_dir = "/home/json-task.com/smarty/templates_c/";
			$this->config_dir = "/home/json-task.com/smarty/configs/";
			$this->cache_dir = "/home/json-task.com/smarty/cache/";
		}
	}
?>