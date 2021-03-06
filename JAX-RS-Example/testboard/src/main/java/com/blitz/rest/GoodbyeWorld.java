package com.blitz.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.UriInfo;


@Path("/goodbye")
public class GoodbyeWorld {
	
	@Context
	UriInfo uriInfo;
	@Context
	Request request;
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void outputData(String json){
		System.out.println(json);
	} 
}
