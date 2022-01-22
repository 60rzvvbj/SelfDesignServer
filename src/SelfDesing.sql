create database SelfDesing;

create table user(
	account varchar(20) PRIMARY KEY,
	pwd varchar(50),
	username varchar(20),
	vip int
);

create table project(
	id int PRIMARY KEY AUTO_INCREMENT,
	account varchar(20),
	content text,
	createTime long,
	updateTime long
);