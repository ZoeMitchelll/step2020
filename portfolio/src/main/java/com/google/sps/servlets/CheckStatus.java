package com.google.sps.servlets;


import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/status")
public class CheckStatus extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");
    PrintWriter out = response.getWriter();
    UserService userService = UserServiceFactory.getUserService();
    if (userService.isUserLoggedIn()) {
        out.println(new Gson().toJson(true));
<<<<<<< HEAD
    }
    else {
=======
    }else{
>>>>>>> 1e9b006429eac588504484c5c9e9fe1332bdf466
        out.println(new Gson().toJson(false));
    }
  }
}
