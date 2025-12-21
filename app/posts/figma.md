---
title: How to make a vtuber style logo in figma
date: 2024-12-17
tags:
- work in progress
- tutorial
- design
---

Vtuber logos are a style of logo - here are some I've made!

![](/public/blog/figma/logos.png)

## Getting Started

This is meant to be a basic Figma tutorial, for those who are mostly new to Figma. 

Figma is a vector based design app. You can download Figma [here](https://www.figma.com/downloads/), but there is also a web version. 

The vtuber logo font used here is called Yuruka - you can download that from [here](https://www.freefontdownload.org/en/fot-yuruka-std.font) or [here](https://archive.org/details/Fontworks).

There are roughly four parts to this tutorial:
1. text layout
2. masking in color
3. icons
4. outline


## Part 1: Text

First, in Figma, create a Frame (shortcut F). Think of this as a picture frame that your logo is contained within! Inside that frame, create a Textbox (shortcut T), and type in whatever you want your logo to say. Choose Yuruka for the font if you want to use the classic anime logo font. I use font size 96!

![](/public/blog/figma/1.png)

Next, we're going to separate the text into individual vector letters. Right click, then click on Outline stroke!

![](/public/blog/figma/2.png)

Now, if you double click into any of the letters, you can rotate and move it around individually. Do that for all the letters - rotate and move them all slightly!

![](/public/blog/figma/3.png)

After you're satisfied with how the letters line up, right click, then click on Flatten. This makes the entire word a singular vector instead of being divided up by letters.

![](/public/blog/figma/4.png)

## Part 2: Color

First, fill in both the frame and text with whatever color you want them to be. Change the colour in the Fill section to do so.

![](/public/blog/figma/5.png)

Next, copy paste the text so you have two of the same! Right click on the top text layer, then click Use as mask. This will make it so anything we add on top will be bound only to where the mask is! We'll be using this to add more color to only the text.

![](/public/blog/figma/6.png)

What I personally like doing for multiple colours within text is using the pen tool to draw random shapes. Click on the pen tool in the bottom bar (shortcut P) to start - I like drawing in this scribbly shape that zigzags in the word.

![](/public/blog/figma/7.png)

Then, add a fill to the shape you just created by clicking on the "+" symbol! Make sure the shape is closed off in order for the fill to work. Also, get rid of the stroke by clicking on the "-" symbol.

![](/public/blog/figma/8.png)

Round off the shape by dragging right on the Corner radius box by the right. Then, change the fill color!

![](/public/blog/figma/9.png)

What I personally like doing is setting the opacity to 25%, then copy pasting it three times, then shifting the pasted layers a little downwards. That creates a nice solid color gradient effect. However, I encourage y'all to be creative with this - make non-wave shapes, add actual smooth gradients to these, do more with colours within your text!

![](/public/blog/figma/10.png)

## Part 3: Icons

For icons, we'll be using Figma's built in icons!

Go to Assets on the left, then click on Simple Design System. If Simple Design Systems doesn't show up, you'll need to add the library via the button below.

![](/public/blog/figma/11.png)

Click on Icons - this is where the entire list of icons are!

![](/public/blog/figma/12.png)

Choose whatever icons you want and insert them in.

![](/public/blog/figma/13.png)

Change their colour by highlighting all of them, then click on Selection colors. Within the colors menu popup, go to Custom, then pick whatever color you want!

![](/public/blog/figma/14.png)

Next, we'll need to scale the icons down. Click on Scale (shortcut K), then drag the icons to the size you want!

![](/public/blog/figma/15.png)

Finally, lay them out however you want! 

![](/public/blog/figma/16.png)

Last thing we're doing before outlining is to group everything together!

![](/public/blog/figma/17.png)

## Part 4: Outline

There are multiple ways to make the outline - I'm going to go over two methods.

The first way is to copy paste the entire group, delete the mask layers, then flatten the bottom most group. Then, Add a stroke to the newly created vector, thicken it, and in Stroke settings set Join to Round.

The second method is technically easier but more tedious:

With the pen tool, roughly outline the entire logo. Note it doesn't need to be perfect - later on, when we make the stroke wider and round it off, minor imperfections will be unseen.

![](/public/blog/figma/18.png)

Move the outline below the grouped layer. Add a fill. Thicken to around 30. Set rounding to around 50.

![](/public/blog/figma/19.png)

Set both the stroke and fill color to be the same as the frame color. Then, remove the frame fill.

![](/public/blog/figma/20.png)

That's it! To export the frame, select the frame (you may need to move the logo/frame to be centered, and so there's minimal space between the edge and the logo), click on Export in the bottom right corner.

![](/public/blog/figma/21.png)

That's it for this guide! Thanks for reading :D
