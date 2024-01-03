let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
let test = "";
switch (rule) { 
 case rule.length < 25: 
 return test = "Все таки нет правил без исключения"; 
  break; 
case rule.length == 25:
 return test = "50 на 50";
  break;
case rule.length > 25:
  return test = "У меня 100 пудов все получится";
  break;
};
console.log(test);