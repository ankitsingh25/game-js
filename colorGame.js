var gameSquareHardness = { Hard: 6, Easy: 3};
var numSquares = gameSquareHardness.Hard;
var color = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	for(var i = 0;i < modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			numSquares = this.textContent === "Easy" ?  gameSquareHardness.Easy : gameSquareHardness.Hard;
			reset();
		});
	}

	for(var i = 0;i < squares.length;i++)
	{
		squares[i].style.backgroundColor = color[i];

		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);  
				h1[0].style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}

	reset();
}


function reset()
{
	color = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1[0].style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New colors";
	for(var i = 0;i < squares.length;i++)
	{
		if(color[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = color[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click",function(){
	reset();
})



function changeColors(color)
{
	for(var i = 0;i < squares.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	return color[Math.floor(Math.random() * color.length)];
}

function generateRandomColors(num)
{
	var arr = [];

	for(var i = 0;i < num ;i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", " + g + ", " + b + ")";
}
