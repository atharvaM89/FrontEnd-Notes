# Html notes

# 1. Intro

![Screenshot 2025-07-21 111827.png](../Images/HTML/Screenshot_2025-07-21_111827.png)

![Screenshot 2025-07-21 111904.png](../Images/HTML/Screenshot_2025-07-21_111904.png)

![Screenshot 2025-07-21 111956.png](../Images/HTML/Screenshot_2025-07-21_111956.png)

![Screenshot 2025-07-21 112025.png](../Images/HTML/Screenshot_2025-07-21_112025.png)

![Screenshot 2025-07-21 112138.png](../Images/HTML/Screenshot_2025-07-21_112138.png)

![Screenshot 2025-07-21 112155.png](../Images/HTML/Screenshot_2025-07-21_112155.png)

![Screenshot 2025-07-21 112228.png](../Images/HTML/Screenshot_2025-07-21_112228.png)

![Screenshot 2025-07-21 112236.png](../Images/HTML/Screenshot_2025-07-21_112236.png)

![Screenshot 2025-07-21 112250.png](../Images/HTML/Screenshot_2025-07-21_112250.png)

![Screenshot 2025-07-21 112307.png](../Images/HTML/Screenshot_2025-07-21_112307.png)

![Screenshot 2025-07-21 112318.png](../Images/HTML/Screenshot_2025-07-21_112318.png)

![Screenshot 2025-07-21 112331.png](../Images/HTML/Screenshot_2025-07-21_112331.png)

# 2. Boiler Plate

HTML boiler platecode

![Screenshot 2025-07-21 113500.png](../Images/HTML/Screenshot_2025-07-21_113500.png)

![Screenshot 2025-07-22 101836.png](../Images/HTML/Screenshot_2025-07-22_101836.png)

<!DOCTYPE html>

- It means the browser which is running this code parcel is compatable for html5

<html lang=”en”>

- Represents the type of language it uses.

### **HEAD SECTION**

- The Meta tags helps the page to load on the browser

<meta charset=”UTF-8”>

- so Basically UTF  is a Encoded transforming format
it helps the page to load which is in encoded format
- so it looks to the transformation of symbols

<meta name="viewport" content="width=device-width, initial-scale=1.0">

- so this viewport help us to view our website in a corrent format
- initial scale =1.0 means 100 % it determines the zoom for webpage when it opens initially

<title>Document</title>

- It is diplay on the top of the tab open inn browser

### BODY SECTION

- Any thing we write in the body tag will display on the webpage
- we need to write inside the paragraph tag or list tag or else
- we can not directly write any thing inside the body tag

### Diff b/w Head and Body

BODY SECTION

- Whatever we place inside the body section that thing will instintanly dipslay on the webpage
- if browser doesn’t ask for it then also it displays it

HEAD SECTION

- It will store in Browser memory not directly display on the webpage
- until and unless browser will not ask for it
- it is kind of lazy loading

# 3. Tags in HTML

There are 2 types of tags in HTML

1. Pair tags/ Open-close tags
- ex- <p></p>
- i.e it is a type of tag that we need to close after the use of the tag

1. Self Closing tags (void tags)
- ex- <br>
- It is type of tag which we do not need to close
- it closes it automatically

### List of tags in HTML

- <h1> to <h6>-  these 6 are heading tags from big size to smaller size
- <p> - Paragraph tag, it is used for creating paragraph in html
- <img> - It is an image tag use to insert image in the webpage.
- <a> - Anchor tag, it is used for adding hypter text
- <br> - Line break - inside a paragraph
- <hr> - Add Horizontal line
- <strong> - for bold text
- <em> - for itallic text
- <ol> - For Ordered list
- <ul> - unordered list
- <table> - For Creating table
- <form> - for creating form

- lorem 10- so basically when you use lorem 
ex- lorem 10 ,
when we use it, it gives us random 10 words

### a. Anchor Tag

![Screenshot 2025-07-21 122144.png](../Images/HTML/Screenshot_2025-07-21_122144.png)

if we want to change target

- If we want to open that link on new tab or current tab
this things is done by target

![Screenshot 2025-07-21 122338.png](../Images/HTML/Screenshot_2025-07-21_122338.png)

we have 4 option

- blank- Opens the webist in new tab
- parent- open in same tab
- self- open in same tab
    - top- Also open in same tab

![Screenshot 2025-07-22 102156.png](../Images/HTML/Screenshot_2025-07-22_102156.png)

### b. List Tag

Ordered list

![Screenshot 2025-07-21 122939.png](../Images/HTML/Screenshot_2025-07-21_122939.png)

![Screenshot 2025-07-21 122946.png](../Images/HTML/Screenshot_2025-07-21_122946.png)

unordered list

![Screenshot 2025-07-21 123122.png](../Images/HTML/Screenshot_2025-07-21_123122.png)

![Screenshot 2025-07-21 123127.png](../Images/HTML/Screenshot_2025-07-21_123127.png)

Types in unorderd list

![Screenshot 2025-07-21 123451.png](../Images/HTML/Screenshot_2025-07-21_123451.png)

![Screenshot 2025-07-21 123506.png](../Images/HTML/Screenshot_2025-07-21_123506.png)

Nested list

![Screenshot 2025-07-21 123708.png](../Images/HTML/Screenshot_2025-07-21_123708.png)

![Screenshot 2025-07-21 123712.png](../Images/HTML/Screenshot_2025-07-21_123712.png)

### c. Image Tag

![Screenshot 2025-07-21 124041.png](../Images/HTML/Screenshot_2025-07-21_124041.png)

for inserting any image that image should be present in a that path

![Screenshot 2025-07-21 124054.png](../Images/HTML/Screenshot_2025-07-21_124054.png)

![Screenshot 2025-07-22 102203.png](../Images/HTML/Screenshot_2025-07-22_102203.png)

### d. SubScrpit and SuperScript Tag

![Screenshot 2025-07-22 102008.png](../Images/HTML/Screenshot_2025-07-22_102008.png)

### e. Video Tag

![Screenshot 2025-07-22 102432.png](../Images/HTML/Screenshot_2025-07-22_102432.png)

![Screenshot 2025-07-22 102438.png](../Images/HTML/Screenshot_2025-07-22_102438.png)

# 4. Form, Lable , etc

![Screenshot 2025-07-21 191408.png](../Images/HTML/Screenshot_2025-07-21_191408.png)

- These all things is a type of Form
- For Name and Email we want to take input from a user is a label and we use Label for the Name
- for The input of label name we use Input
- The mesage we are geeting user it way be bigger text, so for message choose textarea tag
- To send the information that is link with api We use Send 
i.e for that we use Button tag

### Form

![Screenshot 2025-07-21 192336.png](../Images/HTML/Screenshot_2025-07-21_192336.png)

### Label

![Screenshot 2025-07-21 192547.png](../Images/HTML/Screenshot_2025-07-21_192547.png)

- In for- we specify the type for which we are creating a label
- After the block we Write the actual name of the lable which will be shown in the Webpage

### Input

![Screenshot 2025-07-21 192944.png](../Images/HTML/Screenshot_2025-07-21_192944.png)

- In type we specifies the type of text we want to give an input
- In name we give the reference of the label
- In id we also specifies the reference of the label
    - after that we specify the uses i.e required , read only, write only and etc

### TextArea

![Screenshot 2025-07-21 193702.png](../Images/HTML/Screenshot_2025-07-21_193702.png)

- so Basically text area is used for bigger size text
- in name section we define the name of the text area
- in id we give reference of the label
- we specify the use that is it is required
- we determine the size of the text area using rows and cols

### Button

![Screenshot 2025-07-21 194159.png](../Images/HTML/Screenshot_2025-07-21_194159.png)

- We use this button tag in various type 
i.e for reset and submit and also use as button
- we just need to specift the type

# 5. Tables

- The table is Created using table tag
- giving table border is compolsory without border it is not seeing good

![Screenshot 2025-07-21 195350.png](../Images/HTML/Screenshot_2025-07-21_195350.png)

### Tr, Th, Td

- tr is used for creating or giving data row wise
- Th - it is a table heading tag what ever will be the heading like the first rows data will be in Th ie it is the heading row
- td- It is a Table data 
all rows data will be in td but not of 1st row

![Screenshot 2025-07-21 200007.png](../Images/HTML/Screenshot_2025-07-21_200007.png)

[https://www.notion.so](https://www.notion.so)

### RowSpan and ColSpan

- Basically row span and col span is mearing if rows and columns based on our requirement

### Row Span

- one row takes the size of 2 rows
for that row we need to specify just after that row
- for the data which is not in the row for that we need to make another row and insert that data in td

![Screenshot 2025-07-21 201812.png](../Images/HTML/Screenshot_2025-07-21_201812.png)

![Screenshot 2025-07-21 201835.png](../Images/HTML/Screenshot_2025-07-21_201835.png)

### ColSpan

![Screenshot 2025-07-22 093919.png](../Images/HTML/Screenshot_2025-07-22_093919.png)

![Screenshot 2025-07-22 093924.png](../Images/HTML/Screenshot_2025-07-22_093924.png)

- Similar as row span

![Screenshot 2025-07-22 102349.png](../Images/HTML/Screenshot_2025-07-22_102349.png)

![Screenshot 2025-07-22 102357.png](../Images/HTML/Screenshot_2025-07-22_102357.png)

# 6. Div and Span

- So simplicity consider Div and Span as a Rows and Column

### Div

![Screenshot 2025-07-22 094912.png](../Images/HTML/Screenshot_2025-07-22_094912.png)

![Screenshot 2025-07-22 094933.png](../Images/HTML/Screenshot_2025-07-22_094933.png)

- It is Also known as Block Element
- so basically in div it take one complete row
- and if you want to insert another block after the created div block then you cannot do that because the div block takes one complete row

### Span

![Screenshot 2025-07-22 095530.png](../Images/HTML/Screenshot_2025-07-22_095530.png)

![Screenshot 2025-07-22 095550.png](../Images/HTML/Screenshot_2025-07-22_095550.png)

- It is also Known as Inline Element
- So basically in span it takes one complete column

### Div and Span

![Screenshot 2025-07-22 095642.png](../Images/HTML/Screenshot_2025-07-22_095642.png)

![Screenshot 2025-07-22 102139.png](../Images/HTML/Screenshot_2025-07-22_102139.png)

![Screenshot 2025-07-22 102212.png](../Images/HTML/Screenshot_2025-07-22_102212.png)

# 7. Semantic Elements

- Non Semantic Element - div and Span
- Semantic Element - <header>, <nav>, <section>, <article>, <footer >

### Header

- Used for Giving any Header

### Footer

- Used to give Footer of the page

![Screenshot 2025-07-22 101003.png](../Images/HTML/Screenshot_2025-07-22_101003.png)

![image.png](image.png)

### Article and Section

![Screenshot 2025-07-22 101145.png](../Images/HTML/Screenshot_2025-07-22_101145.png)

ex- this is one article in newspaper so this article is inside a section block 

![Screenshot 2025-07-22 101458.png](../Images/HTML/Screenshot_2025-07-22_101458.png)

![Screenshot 2025-07-22 101450.png](../Images/HTML/Screenshot_2025-07-22_101450.png)
