<?php
define('FILE_DATA', __DIR__ . '/data.json');

$httpMethod = $_SERVER['REQUEST_METHOD'];

switch (strtolower($httpMethod)) {
	case 'get':
		getUsers();
		break;
		
	case 'post':
	case 'put':
		$user = json_decode(file_get_contents('php://input'));
		echo saveUser($user);
		break;			
		
	case 'delete':
		$userIds = $_REQUEST['userIds'];
		deleteUser($userIds);
		break;
		
	default:
		exit('Method is not allow');
		break;
}

function getData() {
	return file_get_contents(FILE_DATA);	
}

function getUsers() {
	echo getData();
}

function saveUser($user) {
	$users = json_decode(getData());
	
	if (!empty($user->UserID)) {
		foreach ($users as $index => $u) {
			if ($u->UserID == $user->UserID) {
				$users[$index] = $user;
				break;
			}
		}
	} else {			
		$user->UserID = count($users) + 1;
		array_push($users, $user);		
	}	
	
	file_put_contents(FILE_DATA, json_encode($users));
	return $user->UserID;
}

function deleteUser($userIds) {
	$userIds = explode(',', $userIds);
	$users = json_decode(getData());
	
	foreach ($users as $index => $user) {
		foreach ($userIds as $userId) {
			if ($user->UserID == $userId) {
				unset($users[$index]);				
				break;
			}
		}
	}
	
	file_put_contents(FILE_DATA, json_encode($users));
}