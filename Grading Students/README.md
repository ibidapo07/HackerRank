## Grading Students

HackerLand University has the following grading policy:

<li>
<ul>
<p>Every student receives a <strong><em>grade</em></strong> in the inclusive range from <strong>0</strong> to <strong>100</strong></p>
</ul>
<ul>
<p>Any<strong><em>grade</em></strong> less than <strong>40</strong> is a failing grade.</p>
</ul>
</li>

Sam is a professor at the university and likes to round each student's <strong><em>grade</em></strong> according to these rules:

<li>
<ul>
<p>If the difference between the <strong><em>grade</em></strong> and the next multiple of <strong>5</strong> is less than  <strong>3</strong> round <strong><em>grade</em></strong> up to the next multiple of <strong>5</strong>.</p>
</ul>
<ul>
<p>If the value of <strong><em>grade</em></strong> is less than <strong>38</strong>, no rounding occurs as the result will still be a failing grade.</p>
</ul>
</li>

<strong>Example</strong>

<li>
<ul>
<p> <strong><em>grade</em></strong> = <strong>84</strong> round to  <strong>85</strong> (85-84 less than 3)</p>
</ul>
<ul>
<p> <strong><em>grade</em></strong> = <strong>29</strong> do not round (result is less than 40)</p>
</ul>
<ul>
<p> <strong><em>grade</em></strong> = <strong>57</strong> do not round (60-57 is 3 or higher)</p>
</ul>
</li>

Given the initial value of <strong><em>grade</em></strong> for each of Sam's <strong><em>n</em></strong> students, write code to automate the rounding process.

<strong>Function Description</strong>

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

<li>
<ul>
<p>int[n]: the grades after rounding as appropriate</p>
</ul>
</li>

<strong>Returns</strong>

<li>
<ul>
<p>int[n]: the grades after rounding as appropriate</p>
</ul>
</li>

<strong>Input Format</strong>

<p>The first line contains a single integer, <strong><em>n</em></strong>, the number of students.
<p>Each line <strong><em>i</em></strong> of the <strong><em>n</em></strong> subsequent lines contains a single integer, <strong><em>grades[i]</em></strong>.

<strong>Constraints</strong>

<li>
<ul>
<p>1 <= n <= 60</p>
</ul>
<ul>
<p>0 <= grades[i] <= 100</p>
</ul>
</li>

<strong>Sample Input 0</strong>

4
73
67
38
33

<strong>Sample Output 0</strong>

75
67
40
33
