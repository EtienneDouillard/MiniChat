
SELECT m.message, u.nickname FROM messages m INNER JOIN users u on u.login = m.userLogin WHERE channelId = 1;
