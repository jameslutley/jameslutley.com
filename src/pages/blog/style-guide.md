---
title: Style Guide
date: 2017-10-19T21:24:36.600Z
thumbnail: /public/static/11379333_499114960256764_1288126873_n.jpg
categories:
  - Design
  - Tech
  - ''
---
<p>Areas of user-generated content, with HTML that has come from a CMS.</p>

<p>The introductory paragraph above uses the <code>.s-prose--lede</code> class to scope that content. The rest of the content on this page lies within the <code>.s-prose--body</code> scope<sup id="fnref:1"><a href="#fn:1" class="footnote">1</a></sup>.</p>

<h2>Second-level heading</h2>
<p>Main page headings are <code>h1</code> elements, so futher headings within this scope should start with <code>h2</code>, an example of which appears directly above. More than one may be used per page. Consider using an <code>h2</code> unless you need a header level of less importance, or as a sub-header to an existing <code>h2</code> element.</p>

<h3>Third-level heading</h3>
<p>The header above is an <code>h3</code> element, which may be used for any form of page-level header which falls below the <code>h2</code> header in a document hierarchy.</p>

<h4>Fourth-level heading</h4>
<p>The header above is an <code>h4</code> element, which may be used for any form of page-level header which falls below the <code>h3</code> header in a document hierarchy.</p>

<h2>Grouping content</h2>

<h3>Paragraphs</h3>
<p>All paragraphs are wrapped in <code>p</code> tags.</p>

<h3>Horizontal rule</h3>
<p>The <code>hr</code> element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book. The following extract from <cite>Pandora’s Star</cite> by Peter F. Hamilton shows two paragraphs that precede a scene change and the paragraph that follows it:</p>

<p>Dudley was ninety-two, in his second life, and fast approaching time for another rejuvenation. Despite his body having the physical age of a standard fifty-year-old, the prospect of a long degrading campaign within academia was one he regarded with dread. For a supposedly advanced civilization, the Intersolar Commonwealth could be appallingly backward at times, not to mention cruel.</p>

<p><em>Maybe it won’t be that bad</em>, he told himself. The lie was comforting enough to get him through the rest of the night’s shift.</p>

<hr>

<p>The Carlton AllLander drove Dudley home just after dawn. Like the astronomer, the vehicle was old and worn, but perfectly capable of doing its job. It had a cheap diesel engine, common enough on a semi-frontier world like Gralmond, although its drive array was a thoroughly modern photoneural processor. With its high suspension and deep-tread tyres it could plough along the dirt track to the observatory in all weather and seasons, including the metre-deep snow of Gralmond’s winters.</p>

<h3>Pre-formatted text</h3>
<p>The <code>pre</code> element represents a block of pre-formatted text, in which structure is represented by typographic conventions rather than by elements. Such examples are an e-mail (with paragraphs indicated by blank lines, lists indicated by lines prefixed with a bullet), fragments of computer code (with structure indicated according to the conventions of that language) or displaying <abbr title="American Standard Code for Information Interchange">ASCII</abbr> art. Here’s an example showing the printable characters of <abbr title="American Standard Code for Information Interchange">ASCII</abbr>:</p>

<pre><code> ! " # $ % &amp; ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
</code></pre>

<h3>Blockquotes</h3>
<p>The <code>blockquote</code> element represents a section that is being quoted from another source.</p>

<blockquote>
<p>Big Yellow Taxi there by Joni Mitchell, a song in which she complains that they ‘paved paradise to put up a parking lot’ – a measure which actually would have alleviated traffic congestion on the outskirts of paradise. Something which Joni singularly fails to point out, perhaps because it doesn’t quite fit in with her blinkered view of the world.</p>

<p>Nevertheless, nice song.</p>
</blockquote>

<p>If you wish to add a citation, enclose it within a <code>&lt;cite&gt;</code> tag:</p>

<blockquote>
<p>Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.</p>
<cite>— Winston Churchill, in <a href="http://hansard.millbanksystems.com/commons/1947/nov/11/parliament-bill#column_206">a speech to the House of Commons</a>. 11th November 1947</cite>
</blockquote>

<h3>Ordered list</h3>
<p>The <code>ol</code> element denotes an ordered list, and various numbering schemes are available through the CSS (including 1,2,3… a,b,c… i,ii,iii… and so on). Each item requires a surrounding <code>&lt;li&gt;</code> and <code>&lt;/li&gt;</code> tag, to denote individual items within the list (as you may have guessed, <code>li</code> stands for list item).</p>

<ol>
<li>This is an ordered list.</li>
<li>This is the second item, which contains a sub list
<ol>
<li>This is the sub list, which is also ordered.</li>
<li>It has two items.</li>
</ol>
</li>
<li>This is the final item on this list.</li>
</ol>

<h3>Unordered list</h3>
<p>The <code>ul</code> element denotes an unordered list (ie. a list of loose items that don’t require numbering, or a bulleted list). Again, each item requires a surrounding <code>&lt;li&gt;</code> and <code>&lt;/li&gt;</code> tag, to denote individual items. Here is an example list showing the constituent parts of the British Isles:</p>

<ul>
<li>United Kingdom of Great Britain and Northern Ireland:
<ul>
<li>England</li>
<li>Scotland</li>
<li>Wales</li>
<li>Northern Ireland</li>
</ul>
</li>
<li>Republic of Ireland</li>
<li>Isle of Man</li>
<li>Channel Islands:
<ul>
<li>Bailiwick of Guernsey</li>
<li>Bailiwick of Jersey</li>
</ul>
</li>
</ul>

<p>Sometimes we may want each list item to contain block elements, typically a paragraph or two:</p>

<ul>
<li>
<p>The British Isles is an archipelago consisting of the two large islands of Great Britain and Ireland, and many smaller surrounding islands.</p>
</li>
<li>
<p>Great Britain is the largest island of the archipelago. Ireland is the second largest island of the archipelago and lies directly to the west of Great Britain.</p>
</li>
<li>
<p>The full list of islands in the British Isles includes over 1,000 islands, of which 51 have an area larger than 20 km<sup>2</sup>.</p>
</li>
</ul>

<h3>Definition list</h3>
<p>he <code>dl</code> element is for another type of list called a definition list. Instead of list items, the content of a <code>dl</code> consists of <code>dt</code> (definition term) and <code>dd</code> (definition description) pairs. Though it may be called a “definition list”, <code>dl</code> can apply to other scenarios where a parent/child relationship is applicable. For example, it may be used for marking up dialogues, with each <code>dt</code> naming a speaker, and each <code>dd</code> containing his or her words.</p>

<dl>
<dt>This is a term.</dt>
<dd>This is the definition of that term, which both live in a <code>dl</code>.</dd>
<dt>Here is another term.</dt>
<dd>And it gets a definition too, which is this line.</dd>
</dl>

<h3>Figures</h3>
<p>The <code>figure</code> element is used to annotate illustrations, diagrams, photos, code listings or provide a citation for an excerpted piece of content. The following examples show a section of pre-formatted text, a quotation and an image:</p>

![Da Nang Skyline](/public/static/1600x900.jpg)

_Single image, with supporting caption_

<p>For figures using the <code><span>.u-extend</span></code> utility, the caption moves to the right at the largest breakpoint.</p>

![Fresh vegetables](/public/static/1600x900-1.jpg)

_Single image, with supporting caption to the right_

<h2>Text-level Semantics</h2>
<p>There are a number of inline <abbr title="HyperText Markup Language">HTML</abbr> elements you may use anywhere within other elements.</p>

<h3>Links and anchors</h3>
<p>The <code>a</code> element is used to hyperlink text, be that to another page, a named fragment on the current page or any other location on the web. Example:</p>

<p><a href="/">Go to the home page</a> or <a href="#top">return to the top of this page</a>.</p>

<h3>Stressed emphasis</h3>
<p>The <code>em</code> element is used to denote text with stressed emphasis, i.e., something you’d pronounce differently. Where italicising is required for stylistic differentiation, the <code>i</code> element may be preferable. Example:</p>

<p>You simply <em>must</em> try the negitoro maki!</p>

<h3>Strong importance</h3>
<p>The <code>strong</code> element is used to denote text with strong importance. Where bolding is used for stylistic differentiation, the <code>b</code> element may be preferable. Example:</p>

<p><strong>Don’t</strong> stick nails in the electrical outlet.</p>

<h3>Small print</h3>
<p>The <code>small</code> element is used to represent disclaimers, caveats, legal restrictions, or copyrights (commonly referred to as ‘small print’). It can also be used for attributions or satisfying licensing requirements. Example:</p>

<p><small>Copyright © 1922-2011 Acme Corporation. All Rights Reserved.</small></p>

<h3>Strikethrough</h3>
<p>The <code>s</code> element is used to represent content that is no longer accurate or relevant. When indicating document edits i.e., marking a span of text as having been removed from a document, use the <code>del</code> element instead. Example:</p>

<s>Recommended retail price: £3.99 per bottle</s>

<p><strong>Now selling for just £2.99 a bottle!</strong></p>

<h3>Citations</h3>
<p>The <code>cite</code> element is used to represent the title of a work (e.g. a book, essay, poem, song, film, TV show, sculpture, painting, musical, exhibition, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing. Example:</p>

<p><cite>Universal Declaration of Human Rights</cite>, United Nations, December 1948. Adopted by General Assembly resolution 217 A (III).</p>

<h3>Inline quotes</h3>
<p>The <code>q</code> element is used for quoting text inline. Example showing nested quotations:</p>

<p>John said, <q>I saw Lucy at lunch, she told me <q>Mary wants you to get some ice cream on your way home</q>. I think I will get some at Ben and Jerry’s, on Gloucester Road.</q></p>

<h3>Definition</h3>
<p>The <code>dfn</code> element is used to highlight the first use of a term. The <code>title</code> attribute can be used to describe the term. Example:</p>

<p>Bob’s <dfn title="Dog">canine</dfn> mother and <dfn title="Horse">equine</dfn> father sat him down and carefully explained that he was an <dfn title="A mutation that combines two or more sets of chromosomes from different species">allopolyploid</dfn> organism.</p>

<h3>Abbreviation</h3>
<p>The <code>abbr</code> element is used for any abbreviated text, whether it be acronym, initialism, or otherwise. Any text in the <code>title</code> attribute will appear when the user’s mouse hovers the abbreviation. Example abbreviations:</p>

<p><abbr title="British Broadcasting Corportation">BBC</abbr>, <abbr title="HyperText Markup Language">HTML</abbr>, and <abbr title="Staffordshire">Staffs.</abbr></p>

<h3>Time</h3>
<p>The <code>time</code> element is used to represent either a time on a 24 hour clock, or a precise date in the proleptic Gregorian calendar, optionally with a time and a time-zone offset. Example:</p>

<p>Queen Elizabeth II was proclaimed sovereign of each of the Commonwealth realms on <time datetime="1952-02-6">6</time> and <time datetime="1952-02-7">7 February 1952</time>, after the death of her father, King George VI.</p>

<h3>Code</h3>
<p>The <code>code</code> element is used to represent fragments of computer code. Useful for technology-oriented sites, not so useful otherwise. Example:</p>

<p>When you call the <code>activate()</code> method on the <code>robotSnowman</code> object, the eyes glow.</p>

<p>The following exampes shows the <code>code</code> element used in conjunction with the <code>pre</code> element (with the applicable syntax highlighting applied automatically):</p>

<pre><code>&lt;?php
echo 'Hello World!';
?&gt;
</code></pre>

```javascript
  const mongoose = require('mongoose');
  const User = mongoose.model('User');
  const promisify = require('es6-promisify');

  // ...

  exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name!').notEmpty();
    req.checkBody('email', 'That email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
      remove_dots: false,
      remove_extension: false,
      gmail_remove_subaddress: false,
    });
    req.checkBody('password', 'Password cannot be blank!').notEmpty();
    req.checkBody('password-confirm', 'Confirmed password cannot be blank!').notEmpty();
  };
    req.checkBody('password-confirm', 'Oops! Your passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
    if ( errors ) {
      req.flash('error', errors.map(err => err.msg));
      res.render('register', { title: 'Register', body: req.body, flashes: req.flash() });
      return; // Stop the fn from running
    }
    next(); // There were no errors!
  };
    
  exports.register = async (req, res, next) => {
    // ...
  };
```

<h3>Variable</h3>
<p>The <code>var</code> element is used to denote a variable in a mathematical expression or programming context, but can also be used to indicate a placeholder where the contents should be replaced with your own value. Example:</p>

<p>If there are <var>n</var> pipes leading to the ice cream factory then I expect at <em>least</em> <var>n</var> flavours of ice cream to be available for purchase!</p>

<h3>Sample output</h3>
<p>The <code>samp</code> element is used to represent (sample) output from a program or computing system. Useful for technology-oriented sites, not so useful otherwise. Example:</p>

<p>The computer said <samp>Too much cheese in tray two</samp> but I didn’t know what that meant.</p>

<h3>Keyboard entry</h3>
<p>The <code>kbd</code> element is used to denote user input (typically via a keyboard, although it may also be used to represent other input methods, such as voice commands). Example:</p>

<p>To take a screenshot on your Mac, press <kbd>⌘ Cmd</kbd> + <kbd>⌘ Shift</kbd> + <kbd>3</kbd>.</p>

<h3>Superscript and subscript text</h3>
<p>The <code>sup</code> element represents a superscript and the sub element represents a <code>sub</code>. These elements must be used only to mark up typographical conventions with specific meanings, not for typographical presentation. As a guide, only use these elements if their absence would change the meaning of the content. Example:</p>

<p>The coordinate of the <var>i</var>th point is (<var>x<sub><var>i</var></sub></var>, <var>y<sub><var>i</var></sub></var>). For example, the 10th point has coordinate (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>).</p>

<p>f(<var>x</var>, <var>n</var>) = log<sub>4</sub><var>x</var><sup><var>n</var></sup></p>

<h3>Italicised</h3>
<p>The <code>i</code> element is used for text in an alternate voice or mood, or otherwise offset from the normal prose. Examples include taxonomic designations, technical terms, idiomatic phrases from another language, the name of a ship or other spans of text whose typographic presentation is typically italicised. Example:</p>

<p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>

<h3>Emboldened</h3>
<p>The <code>b</code> element is used for text stylistically offset from normal prose without conveying extra importance, such as key words in a document abstract, product names in a review, or other spans of text whose typographic presentation is typically emboldened. Example:</p>

<p>You enter a small room. Your <b>sword</b> glows brighter. A <b>rat</b> scurries past the corner wall.</p>

<h3>Marked or highlighted text</h3>
<p>The <code>mark</code> element is used to represent a run of text marked or highlighted for reference purposes. When used in a quotation it indicates a highlight not originally present but added to bring the reader’s attention to that part of the text. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its relevance to the user’s current activity. Example:</p>

<p>I also have some <mark>kitten</mark>s who are visiting me these days. They’re really cute. I think they like my garden! Maybe I should adopt a <mark>kitten</mark>.</p>

<h2>Edits</h2>
<p>The <code>del</code> element is used to represent deleted or retracted text which still must remain on the page for some reason. Meanwhile its counterpart, the <code>ins</code> element, is used to represent inserted text. Both <code>del</code> and <code>ins</code> have a <code>datetime</code> attribute which allows you to include a timestamp directly in the element. Example inserted text and usage:</p>

<p>She bought <del datetime="2005-05-30T13:00:00">two</del> <ins datetime="2005-05-30T13:00:00">five</ins> pairs of shoes.</p>

<h2>Tabular data</h2>
<p>Tables should be used when displaying tabular data. The <code>thead</code>, <code>tfoot</code> and <code>tbody</code> elements enable you to group rows within each a table.</p>

<p>If you use these elements, you must use every element. They should appear in this order: <code>thead</code>, <code>tfoot</code> and <code>tbody</code>, so that browsers can render the foot before receiving all the data. You must use these tags within the table element.</p>

<table>
<thead>
<tr>
<th>The Very Best Eggnog</th>
<th>Serves 12</th>
<th>Serves 24</th>
</tr>
</thead>
<tbody>
<tr>
<td>Milk</td>
<td>1 quart</td>
<td>2 quart</td>
</tr>
<tr>
<td>Cinnamon Sticks</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>Vanilla Bean, Split</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>Cloves</td>
<td>5</td>
<td>10</td>
</tr>
<tr>
<td>Mace</td>
<td>10</td>
<td>20</td>
</tr>
<tr>
<td>Egg Yolks</td>
<td>12</td>
<td>24</td>
</tr>
<tr>
<td>Cups Sugar</td>
<td>1 ½ cups</td>
<td>3 cups</td>
</tr>
<tr>
<td>Dark Rum</td>
<td>1 ½ cups</td>
<td>3 cups</td>
</tr>
<tr>
<td>Brandy</td>
<td>1 ½ cups</td>
<td>3 cups</td>
</tr>
<tr>
<td>Vanilla</td>
<td>1 tbsp</td>
<td>2 tbsp</td>
</tr>
<tr>
<td>Light Cream</td>
<td>1 quart</td>
<td>2 quart</td>
</tr>
</tbody>
</table>

<ol>
<li id="fn:1">
<p><code>.s-prose--body</code> may also include footnotes.&nbsp;<a href="#fnref:1" class="reversefootnote">↩</a></p>
</li>
</ol>
