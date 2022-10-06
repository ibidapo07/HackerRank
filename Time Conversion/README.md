## TIME CONVERSION

Given a time in 12<a href="https://en.wikipedia.org/wiki/12-hour_clock">-hour AM/PM format</a>, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

<strong>Example</strong>

<li>
<ul>
<p><strong>s = `12:01:00PM`</strong></p>
</ul>
<ul>
<p>Return '12:01:00'</p>
</ul>
</li>

<li>
<ul>
<p><strong>s = `12:01:00AM`</strong></p>
</ul>
<ul>
<p>Return '00:01:00'</p>
</ul>
</li>

<strong>Function Description</strong>

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

<li>
<ul>
<p>string s: a time in <strong>12</strong> hour format</p>
</ul>
</li>

<strong>Returns</strong>

<li>
<ul>
<p>string: the time in <strong>24</strong> hour format</p>
</ul>
</li>

<strong>Input Format</strong>

<p>A single string <strong><em>s</em></strong> that represents a time in <strong>12</strong>-hour clock format (i.e.: <strong>hh:mm:ssAM</strong> or<strong>hh:mm:ssPM</strong> ).</p>

<strong>Constraints</strong>

<li>
<ul>
<p>All time inputs are valid</p>
</ul>
</li>

<strong>Sample Input 0</strong>

07:05:45PM

<strong>Sample Output 0</strong>

19:05:45
