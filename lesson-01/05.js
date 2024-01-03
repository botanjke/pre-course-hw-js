let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
function test(rule){
  let answer = "";
  switch (rule){
    case rule.length < 25:
      answer = "Все таки нет правил без исключения";
      break;
    case rule.length == 25:
      answer = "50 на 50";
     break;
    case rule.length > 25:
      answer = "У меня 100 пудов все получится";
      console.log(answer);
  }
} 