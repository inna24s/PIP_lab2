package Servlets;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet(urlPatterns = {"/control", "/results"})
    public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getServletPath().equals("/results")) {
            request.getRequestDispatcher("/jsp/results.jsp").forward(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getServletPath().equals("/control")) {
            if (request.getParameter("send") != null && (request.getParameter("x") != null || request.getParameter("inputX") !=null) &&  request.getParameter("y") != null) {
                if( request.getParameter("inputX") !=null) request.setAttribute("x", request.getParameter("inputX"));
                request.setAttribute("r", request.getParameter("send"));
                if(request.getParameter("x") != null) request.setAttribute("x", request.getParameter("x"));
                request.setAttribute("y", request.getParameter("y"));
                request.getRequestDispatcher("check").forward(request, response);
            }
        }
    }


}