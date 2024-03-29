package Servlets;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

public class AreaCheckServlet extends HttpServlet {
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpSession session = request.getSession();

        List<Result> results = (List<Result>)session.getAttribute("results");
        if (results == null)
            session.setAttribute("results", (results = new LinkedList<>()));

        String inputX = (String)request.getAttribute("x");
        String inputY = (String)request.getAttribute("y");
        String inputR = (String)request.getAttribute("r");

        double x, y, r;
        try {
            x = Double.parseDouble(inputX);
            y = Double.parseDouble(inputY);
            r = Double.parseDouble(inputR);

            results.add(0, new Result(x, y, r, isThisWorking(x, y, r), System.currentTimeMillis()));

        } catch (NumberFormatException e) {
            session.setAttribute("ch", "wrong_data");
        }

        response.sendRedirect("results");
//        servletRequest.getRequestDispatcher("/WEB-INF/pages/result.jsp").forward(servletRequest, servletResponse);
    }

    private boolean isThisWorking(double x, double y, double r) {
        return ((x <= r && x >= 0 && y >= -r/2 && y <= 0) ||
                (y >= 0 && x >= 0 && y <= -0.5*x + r/2) ||
                (x <= 0 && y >= 0 && x*x + y*y <= r*r/4));
    }
}
