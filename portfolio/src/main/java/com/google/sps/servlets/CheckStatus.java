package com.google.sps.servlets;

import com.google.gson.Gson;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
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
        out.println(new Gson().toJson("Logged in as " + userService.getCurrentUser().getEmail() + "."));
    }else{
        out.println(new Gson().toJson("Currently logged in as Guest."));
    }
  }
}