---
title: "Data Structures Review for Software Interviews"
date: "2019-12-22"
---

<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-size: 24px; font-family: Arial, Helvetica, sans-serif;">Knowing Data Structures is crucial for any software interview and almost all the coding questions asked during an interview are based on Data Structures, thus every candidate should brush up on their Data Structures and be ready to solve questions related to them.</span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Before we begin, let’s understand the importance of Data Structures for candidate selection?</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">First it is a great way to challenge a candidate during an interview as these questions require thinking and problem solving skills. Also in reality, Data Structures are very important for Performance and/or Memory dependent software where selecting a correct Data Structure over another makes a huge difference and sometimes is the only one that works.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">That said it is also valid to say that a lot of the software written out there are not highly dependent on Performance or Memory and thus carefully selecting a Data structure is not as important.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">In this article I will briefly go over the most common Data Structures and explain how to select one over another when solving an interview coding question.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">i.e. Linked List over Array?</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">i.e. Binary Search Tree over Hash table?</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">The Data Structures covered here are:</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Array, Linked List, Binary Search Tree, Hash Table, Stack, Queue and Set.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">The goal here is not to explain them in detail as there are many resources (i.e. YouTube videos) explaining them thoroughly.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">The best way to answer the above question is to think about the advantages and disadvantages of each Data Structure, and once we know them it will be very easy to make a good decision!</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>Advantages &amp; Disadvantages:</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>Array:</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Array is the most used Data Structure. It is easy to create and is very fast to index (point to) an element (i.e. A[3] points to the forth element in the collection)</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">One downside of Array though is Insertion and Deletion of elements. This is due to the fact that all other elements in the collection have to be shifted when these operations are performed. For that reason Array is not suitable for Insertion and Deletion operations. Also Array is a not good candidate for Sorting and Searching elements.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>&nbsp;</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Advantages</em><em>:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Easy to Create</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Direct index of element</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Disadvantages:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Insertion and Deletion</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Sorting and Searching</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>&nbsp;</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>Linked List:</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Linked List as oppose to Array is excellent for Insertion and Deletion operations. This is due to the fact that elements use pointers to point to each other, thus shifting is not required. Because of pointers, Linked List is also great for iterating through the elements in a collection.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">One disadvantage of Linked List over Array is that it cannot be used for direct indexing of an element and likewise Array, Linked List is not suitable for Sorting and Searching.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Advantages:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Inserting and Deleting elements</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Iterating through the elements</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Disadvantages:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Direct index of element</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Sorting and Searching</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Now given the information above, if your solution requires modifying the collection by adding or removing elements consider using Linked List over Array. Likewise if you are indexing an element (i.e. accessing the forth element in the collection) use Array.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>Hash Table:</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Hash Table is a Data Structure that is often used in the solution of many coding exercises. It is used to access elements using Key Value pairs. An example of a Key Value pair is: Color Name to Hex Color Code (i.e. Black, #000000). Hash Table is excellent for Insertion and Deletion operations.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">However, Hash table should not be used when <strong>ordering</strong> of elements in the collection is important.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Advantages:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Access Value for a specific Key</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Inserting and Deleting elements</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Disadvantages:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Keep sorted elements</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Search for a specific Value</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>Binary Search Tree:</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Binary Search Tree has similar advantages as Hash table with the difference that it keeps the elements in the collection in sorted order and so is great when <strong>ordering</strong> of elements in the collection is important.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Advantages:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Inserting and Deleting elements</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Sorting and Searching</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>Stack:</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Stack should only be used when elements are inserted and removed according to LIFO (Last-In First-Out).</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Advantages:</em></span></span></p>
<ul style="margin-bottom:0cm;">
  <li style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Designed for LIFO</span></span></li>
</ul>
<p style="margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:36.0pt;font-size:16px;font-family:&quot;Calibri&quot;,sans-serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Disadvantages:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Direct index of element</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Sorting and Searching</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>Queue:</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Queue should only be used when elements are inserted and removed according to FIFO (First-In First-Out). &nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Advantages:</em></span></span></p>
<ul style="margin-bottom:0cm;">
  <li style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Designed for FIFO</span></span></li>
</ul>
<p style="margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:36.0pt;font-size:16px;font-family:&quot;Calibri&quot;,sans-serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Disadvantages:</em></span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Direct index of element</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Sorting and Searching</span></span></li>
</ul>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Check if the solution requires LIFO or FIFO behaviours. For example: A Question asking to check if a given string has matching parentheses (i.e. open close parentheses). The solution is to add an element to the head of the collection when an open parenthesis is seen and remove it from the head of the collection when a close parenthesis is seen afterwards. This is dictating a Last-In First-Out behaviour and therefore should be implemented using a Stack.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><strong>Set:</strong></span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Set is ideal for checking if an element exists in a collection. It can also be used for avoiding duplicate elements in a solution.</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Advantages</em>:</span></span></p>
<ul>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Check if element exits</span></span></li>
  <li><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Check duplicate</span></span></li>
</ul>
<p style="margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:36.0pt;font-size:16px;font-family:&quot;Calibri&quot;,sans-serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">&nbsp;</span></span></p>
<p style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;"><em>Disadvantages</em>:</span></span></p>
<ul style="margin-bottom:0cm;">
  <li style="margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:&quot;Times New Roman&quot;,serif;"><span style="font-family: Arial,Helvetica,sans-serif;"><span style="font-size: 24px;">Direct index of element</span></span></li>
</ul>
<p>
  <br>
</p>