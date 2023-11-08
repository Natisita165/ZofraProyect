create database zofraDB;
use zofraDB;

create table Usuarios(
	idUsuarios int not null auto_increment,
	user varchar(50) not null,
	passwords varchar(50) not null,
	name varchar(50) not null,
	lastname varchar(50) not null,
	area varchar(50) not null,
	mail varchar(50) not null,
	imagen blob(5000) not null,
	primary key (idUsuarios)
)engine=innoDB;


create table Poliza(
	idPoliza int not null auto_increment,
	typeP varchar(50) not null,
	codeP varchar(50) not null,
	areaP varchar(50) not null,
	stateP varchar(50) not null,
	pdfP blob(5000) not null,
	primary key (idPoliza)
)engine=innoDB;

create table PuntosControl(
	idPuntosControl int not null auto_increment,
	namePC varchar(50) not null,
	imagenPC blob(5000) not null,
	primary key (idPuntosControl)
)engine=InnoDB;

create table Documentos(
	idDocumentos int not null auto_increment,
    idUsuarios int not null,
	nameD varchar(50) not null,
	areaD varchar(50) not null,
	typeD varchar(50) not null,
	codeD varchar(50) not null,
	pdfD blob(5000) not null,
	primary key (idDocumentos),
	foreign key (idUsuarios) references Usuarios(idUsuarios)
)engine=innoDB;

create table Mercaderia(
	idMercaderia int not null auto_increment,
    idUsuarios int not null,
    idPoliza int not null,
    idPuntosControl int not  null,
	nameMerc varchar(50) not null,
	quantity double not null,
	price double not null,
	importer varchar(50) not null,
	type varchar(50) not null,
	dateIn date not null,
	pdfM blob(5000) not null,
	primary key (idMercaderia),
	foreign key (idUsuarios) references Usuarios(idUsuarios),
	foreign key (idPoliza) references Poliza(idPoliza),
	foreign key (idPuntosControl) references PuntosControl(idPuntosControl)
)engine=innoDB;
