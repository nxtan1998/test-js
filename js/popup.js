﻿
status="Mr.Linhkool"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='e';
a[12]='m';
a[13]=' ';
a[14]='y';
a[15]='ê';
a[16]='u';
a[17]=' ';
a[18]='a';
a[19]='n';
a[20]='h';
a[21]=' ';
a[22]='n';
a[23]='h';
a[24]='ấ';
a[25]='t';
a[26]=' ';
a[27]='v';
a[28]='ũ';
a[29]=' ';
a[30]='t';
a[31]='r';
a[32]='ụ';
a[33]=' ';
a[34]='l';
a[35]='u';
a[36]='ô';
a[37]='n';
a[38]=' ';
a[39]=' ';
a[40]=' ';
a[41]='♥';
a[42]='♥';
a[43]='♥';
a[44]='♥';
a[45]='♥';
a[46]='♥';
a[47]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

jQuery(document).ready(function() {
	jQuery('#k').hide();
	jQuery('h1').click(function() {
		jQuery('.active').removeClass('active');
		jQuery('#k').slideUp('fast');
                if(jQuery(this).next('#k').is(':hidden') == true) {
					jQuery(this).addClass('active');
					jQuery(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
						jQuery("#divResult").fadeOut(0);
						jQuery("#divResult").html("</br><h2>haha đừng có chối nữa nhé ! <img src='img/3.gif'</img></h2>");
						jQuery("#divResult").fadeIn(2000,function()
							{
								jQuery("#divResult2").fadeOut(0);
								jQuery("#divResult2").html("<p>Anh cũng Thích em mà<img src='img/2.gif'/></p></br>");
								jQuery("#divResult2").fadeIn(2000,function()
									{
										jQuery("#divResult3").fadeOut(0);
										jQuery("#divResult3").html("<p>Nhớ cơm nước đầy đủ sau này a lo <img src='img/4.gif'/></p></br>");
										jQuery("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				