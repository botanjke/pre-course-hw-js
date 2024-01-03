let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
switch (rule) { 
 case rule.length < 25: 
 return rule = "Все таки нет правил без исключения"; 
  break; 
case rule.length == 25:
 return rule = "50 на 50";
  break;
case rule.length > 25:
  return rule = "У меня 100 пудов все получится";
  break;
};
console.log(rule);