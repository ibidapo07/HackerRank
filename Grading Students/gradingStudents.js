function gradingStudents(grades) {
    // Write your code here
    grades = grades.map(x => {
    if (x < 38){
      return x
}
     switch (x%10) {
  case 9:
  case 4:
    return x+1;
    break
  case 8:
  case 3:
    return x+2;
    break;
  default:
    return x+0;
}
});

return grades
}