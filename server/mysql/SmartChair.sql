-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-04-02 10:15:03
-- 服务器版本： 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SmartChair`
--

-- --------------------------------------------------------

--
-- 表的结构 `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `uid` text NOT NULL COMMENT '设备特征字符',
  `Name` text NOT NULL,
  `Port` text,
  `Email` text NOT NULL COMMENT '自己的邮箱',
  `EmailAnother` text NOT NULL COMMENT ' 需要推送的另一个邮箱',
  `PhoneNum` text NOT NULL COMMENT '自己的电话号码',
  `PhoneNumAnother` text NOT NULL COMMENT '需要紧急通知的电话号码'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户管理';

--
-- 转存表中的数据 `User`
--

INSERT INTO `User` (`id`, `uid`, `Name`, `Email`, `EmailAnother`, `PhoneNum`, `PhoneNumAnother`) VALUES
(1, '2017010306', '测试', '测试', '测四', '测试', '测试');

-- --------------------------------------------------------

--
-- 表的结构 `UuidExample`
--

CREATE TABLE `UuidExample` (
  `id` int(11) NOT NULL,
  `HeartRate` int(11) NOT NULL COMMENT '心率',
  `SpO2` int(11) NOT NULL COMMENT '血氧饱和度',
  `Temperature` int(11) NOT NULL COMMENT '室内温度',
  `Humidity` int(11) NOT NULL COMMENT '室内湿度',
  `Weather` text NOT NULL COMMENT '当地天气',
  `UsageTime` text NOT NULL COMMENT '此次数据产生时间',
  `SynTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '此次数据同步时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='UuidExample';

--
-- 转存表中的数据 `UuidExample`
--

INSERT INTO `UuidExample` (`id`, `HeartRate`, `SpO2`, `Temperature`, `Humidity`, `Weather`, `UsageTime`, `SynTime`) VALUES
(1, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(3, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(17, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(18, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(19, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(20, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(21, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(22, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(23, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(24, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(25, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(26, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01');


CREATE TABLE `170320170103031` (
  `id` int(11) NOT NULL,
  `HeartRate` int(11) NOT NULL COMMENT '心率',
  `SpO2` int(11) NOT NULL COMMENT '血氧饱和度',
  `Temperature` int(11) NOT NULL COMMENT '室内温度',
  `Humidity` int(11) NOT NULL COMMENT '室内湿度',
  `Weather` text NOT NULL COMMENT '当地天气',
  `UsageTime` text NOT NULL COMMENT '此次数据产生时间',
  `SynTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '此次数据同步时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='170320170103031';


INSERT INTO `170320170103031` (`id`, `HeartRate`, `SpO2`, `Temperature`, `Humidity`, `Weather`, `UsageTime`, `SynTime`) VALUES
(1, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(3, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(17, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(18, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(19, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(20, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(21, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(22, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(23, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(24, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01'),
(25, 85, 95, 12, 68, '晴', '20170805', '2017-12-27 13:07:59'),
(26, 83, 94, 12, 68, '晴', '20170805', '2018-01-03 02:41:01');
--
-- Indexes for dumped tables
--

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UuidExample`
--
ALTER TABLE `UuidExample`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `170320170103031`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `UuidExample`
--
ALTER TABLE `UuidExample`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

ALTER TABLE `170320170103031`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
