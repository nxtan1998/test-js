
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
a[11]='m';
a[12]='ì';
a[13]='n';
a[14]='h';
a[15]=' ';
a[16]='t';
a[17]='h';
a[18]='í';
a[19]='c';
a[20]='h';
a[21]=' ';
a[22]='b';
a[23]='ạ';
a[24]='n';
a[25]=' ';
a[26]='n';
a[27]='h';
a[28]='ấ';
a[29]='t';
a[30]=' ';
a[31]='v';
a[32]='ũ';
a[33]=' ';
a[34]='t';
a[35]='r';
a[36]='ụ';
a[37]=' ';
a[38]='l';
a[39]='u';
a[40]='ô';
a[41]='n';
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

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>haha đừng có chối nữa nhé ! <img src='img/3.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Mình cũng Thích bạn mà<img src='img/2.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Nhớ cơm nước đầy đủ sau này mình lo <img src='img/4.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
