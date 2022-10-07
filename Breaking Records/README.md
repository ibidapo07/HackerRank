## Breaking Records

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

<strong>Example</strong>

<p>Scores are in the same order as the games played.  She tabulates her results as follows:</p>

<pre>                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
</pre>

<p>Given the scores for a season, determine the number of times Maria breaks her records for <em>most</em> and <em>least</em> points scored during the season.</p>

<p><strong>Function Description</strong>  </p>
<p>breakingRecords has the following parameter(s):  </p>
<ul>
<li><em>int scores[n]:</em> points scored per game   </li>
</ul>

<p><strong>Returns</strong>   </p>
<ul>
<li><em>int[2]:</em> An array with the numbers of times she broke her records. Index <strong>0</strong>is for breaking <em>most points</em> records, and index <strong>1</strong>is for breaking <em>least points</em> records.</li>
</ul>

<p><strong>Input Format</strong></p>

<p>The first line contains an integer <strong><em>n</em></strong>, the number of games. <br>
The second line contains <strong><em>n</em></strong> space-separated integers describing the respective values of <strong><em>score(0), score(1),...,score(n-1)</em></strong>.
</p>

<p><strong>Constraints</strong></p>

<ul>
<li><p>1 <= n <= 1000</p></li>
<li><p>0 <= scores[i] <= 10^8</p></li>
</ul>
