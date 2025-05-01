Week 09(List items)
package week09;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
public class ListItems {
public static void main(String[] args) {
System.setProperty("webdriver.chrome.driver","F:\\Lab\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
WebDriver driver=new ChromeDriver();
driver.manage().window().maximize();
driver.get("https://www.justdial.com/Hyderabad/Bakeries/nct-10033880");
List<WebElement> m = driver.findElements(By.xpath("//h2[@class='jsx-3349e7cd87e12d75 resultbox_title font22 fw500 color111 complist_title']"));
for(int i = 0; i< m.size(); i++) {
String s = m.get(i).getText();
System.out.println("Text is: " + s);
	      }

	}
	}
