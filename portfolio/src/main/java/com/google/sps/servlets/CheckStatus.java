WebServlet("/status")
public class CheckStatus extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    PrintWriter out = response.getWriter();
    UserService userService = UserServiceFactory.getUserService();
    if (userService.isUserLoggedIn()) {
        out.println("<p>Logged in as " + userService.getCurrentUser().getEmail() + "!</p>");
    else{
        out.println("<p>Currently logged in as Guest.</p>");
    }