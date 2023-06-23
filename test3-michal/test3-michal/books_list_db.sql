-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2023 at 09:29 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books_list_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `authorstable`
--

CREATE TABLE `authorstable` (
  `ID` int(11) NOT NULL,
  `FullName` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `authorstable`
--

INSERT INTO `authorstable` (`ID`, `FullName`) VALUES
(1, 'Smadar Shir'),
(2, 'James Patterson'),
(5, 'David Baldacci'),
(6, 'Nora Roberts');

-- --------------------------------------------------------

--
-- Table structure for table `bookstable`
--

CREATE TABLE `bookstable` (
  `bookID` int(11) NOT NULL,
  `authorID` int(11) NOT NULL,
  `bookName` varchar(255) NOT NULL,
  `pageNum` int(255) NOT NULL,
  `bookPrice` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bookstable`
--

INSERT INTO `bookstable` (`bookID`, `authorID`, `bookName`, `pageNum`, `bookPrice`) VALUES
(2, 2, '50 מ\"ל מתחת למים', 25, 350),
(3, 5, '50 גוונים', 78, 78);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authorstable`
--
ALTER TABLE `authorstable`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `bookstable`
--
ALTER TABLE `bookstable`
  ADD PRIMARY KEY (`bookID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authorstable`
--
ALTER TABLE `authorstable`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `bookstable`
--
ALTER TABLE `bookstable`
  MODIFY `bookID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
