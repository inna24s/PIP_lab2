<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Web2</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/styles/table2.css">
</head>

<body background="im/black.jpg">
<header>
    <div align="center">
        <h1>Попадание точки в заданную область</h1>
    </div>
</header>
<div class="header" align="center">
    <h2>
        <font size="4" color="black"> Воронкова Инна Олеговна; Группа: <span>P3201 </span>; Вапиант: <span>201005</span></font>
    </h2>
</div>

<p style="font-size: 20px">Добро пожаловать!</p>


<table width="100%" >
    <tr>
        <th align="left" width="30%">
            <div class="y">
                <form class='formWithValidation' action="control" name="myForms" method="post" id="g"
                      onSubmit="return onSubmit(checkR(), checkY(),checkX())">

                    <h2>1.Выберите <i>X</i> координату:</h2>
                    <table width="100%">
                        <tr>
                            <td><input type="radio" name="x" value="-4" id="x">-4</td>
                            <td><input type="radio" name="x" value="-1" id="x0">-1</td>
                            <td><input type="radio" name="x" value="2" id="x3"> 2</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="x" value="-3" id="x02">-3</td>
                            <td><input type="radio" name="x" value="0" id="x1">0</td>
                            <td><input type="radio" name="x" value="3" id="x4"> 3</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="x" value="-2" id="x01">-2</td>
                            <td><input type="radio" name="x" value="1" id="x2">1</td>
                            <td><input type="radio" name="x" value="4" id="x5"> 4</td>
                        </tr>
                    </table>
                    <br>
                    <h2>2.Введите <i>Y</i> координату:</h2>
                    <p><input type="text" maxlength="7" size="6" name="y" id="y" placeholder=" от -3 до 3"></p>
                    <span id="result"></span>
                    <h2>3.Кликните по <i>R</i>:</h2>
                    <p id="radius" >
                       <button value="1" name="r" type="button">1</button>
                        <button value="2" name="r" type = "button">2</button>
                        <button value="3" name="r" type = "button">3</button>
                        <button value="4" name="r" type = "button">4</button>
                        <button value="5" name="r" type = "button">5</button>
                        <br/>
                    </p>
                    <input type="text" id="send" name="send"  placeholder="Выберите R 🆘" size="12"  readonly>
                    <div class="panel err_msg" id="err_msg"></div>
                    <p><button name="sub" id="sub" >Отправить</button></p>
                    <input type="hidden" id="inputX" name="inputX">
                </form>
            </div>
        </th>

        <td align="left" >
            <canvas id="myCanvas" width="400" height="400">
                Ваш браузер не поддерживает canvas.
            </canvas>
            <textarea id="log" cols="20" rows="4" >События будут показываться здесь!</textarea>

            <script src="js/canvas.js"></script>

        </td>
        <td align="center" width="40%">
            <div class="panel com" id="comment"></div>
            <div id="reaction"  width="400" height="400">

            </div>
            <canvas id="lion"></canvas>
            <div id="sound"></div>
        </td>
    </tr>
</table>

<script src="${pageContext.request.contextPath}/js/ch.js" type="text/javascript" defer></script>
</body>
</html>