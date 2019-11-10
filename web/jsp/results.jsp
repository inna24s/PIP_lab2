<%@ page import="java.time.ZonedDateTime" %>
<%@ page import="java.util.List" %>
<%@ page import="Servlets.Result" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Results</title>
    <meta charset="utf-8">
    <link rel='stylesheet' href="${pageContext.request.contextPath}/styles/check.css">

</head>
<body>


<h1> Результаты </h1>
<%!private ZonedDateTime createdDate = ZonedDateTime.now();%>


<p>Текущее время: <%=createdDate%><br /></p>
<%

    List<Result> results = (List<Result>) session.getAttribute("results");
    if (results != null) {
        while (results.size() > 15)
            results.remove(results.size() - 1);
    }

%>
<table bordercolor='white' >
    <tr>
        <td >
<table bordercolor='white' border='1' >
   <tr>
       <td>X</td>
        <td>Y</td>
        <td>R</td>
        <td>Попадание</td>
        <td>Текущее время</td>
   </tr>
    <% if (results != null) {%>
    <% for (Result result : results) { %>
    <tr>
        <td><%= result.x %></td>
        <td><%= result.y %></td>
        <td><%= result.r %></td>
        <td><%= result.hit ? "Попал!" : "Не попал :(" %></td>
        <td><%= createdDate %></td>
        </tr>
    <input type="hidden" id="res" name="res" value="<%=result.hit ? "Попал!" : "Не попал :(" %>">
    <% } %>

    <% } %>
    </tr>
    </table>
        </td>
        <td>
            <div class="picture" id="pic" ></div>
            <div id="sound"></div>
        </td>
    </tr>
</table>
<script src="${pageContext.request.contextPath}/js/res.js" type="text/javascript" defer></script>
<a href="${pageContext.request.contextPath}/" class="result_again" id="">Еще раз</a>
</body>
</html>
