import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
public class Week7 {
	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "F:\\Lab\\chromedriver\\chromedriver.exe");
	WebDriver driver=new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("https://www.google.com/");
	Thread.sleep(2000);
	WebElement searchBar= driver.findElement(By.name("q"));
	searchBar.sendKeys("cmrit hyderabad");
	searchBar.sendKeys(Keys.ENTER);
	Thread.sleep(15000);   
	driver.quit();
		}
	}

