package server.backend.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import jakarta.json.Json;
import jakarta.json.JsonObject;

@Controller
public class IndexController {

	@PostMapping(path="/generate", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public ModelAndView postGenerate(@RequestParam String message) {
		ModelAndView mav = new ModelAndView("main");

		JsonObject initValue = Json.createObjectBuilder()
			.add("message", message)
			.build();

		mav.addObject("message", initValue.toString());

		return mav;
	}
}
