package io.kyma.project.emojiapi;


import java.io.File;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Random;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;



@RestController
public class EmojiRest {
	
	private EmojiDetails emojis[];
	private Random random = new Random();
	
	//Not really nice, but get the job done
	public EmojiRest() {
	
		try {
			emojis = new ObjectMapper().readValue(new File("emojis.json"), EmojiDetails[].class);
		} catch (Exception e) {
			throw new RuntimeException("Error reading emoji list", e);
		} 
	}
	
	
	// Just say hello
    @RequestMapping("/")
    public String sayHello() {
        return "Hello Kyma!";
    }
    
    
    //Map the random emoji
    @PostMapping("/api/emojify")
    public EmojiResponse[] emojify(@RequestBody String []names) {
    	
    	return Arrays.stream(names).map(name -> getEmoji(name)).toArray(size -> new EmojiResponse[size]);
    	

    }
    
    private EmojiResponse getEmoji(String name) {
    	
    	// Go random ;-)
    	
    	EmojiDetails emoji = this.emojis[random.nextInt(this.emojis.length)];
    
    	return new EmojiResponse(name, emoji.get("codes").toString(), emoji);
    	
    }


    public static class EmojiResponse {
    	
    	private String name;
    	private String emoji;
    	private EmojiDetails details;
    	
    	
    	public EmojiResponse() {
    		this.details = new EmojiDetails();
    	}
    	
    	
		public EmojiResponse(String name, String emoji, EmojiDetails details) {
			super();
			this.name = name;
			this.emoji = emoji;
			this.details = details;
		}

		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmoji() {
			return emoji;
		}
		public void setEmoji(String emoji) {
			this.emoji = emoji;
		}

		public EmojiDetails getDetails() {
			return details;
		}

		public void setDetails(EmojiDetails details) {
			this.details = details;
		}
    	
    }
    
    public static class EmojiDetails extends HashMap<String, Object> {
		private static final long serialVersionUID = -8728745260916720410L;
	}
    
}