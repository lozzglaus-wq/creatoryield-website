CREATE TABLE `enquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`requestId` varchar(36) NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(254) NOT NULL,
	`channelUrl` varchar(500) NOT NULL,
	`message` text NOT NULL,
	`consent` boolean NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `enquiries_id` PRIMARY KEY(`id`),
	CONSTRAINT `enquiries_requestId_unique` UNIQUE(`requestId`)
);
