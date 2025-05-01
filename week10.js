Week 10 (Gmail Validation)
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
public class exp10 {
	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "F:\\Lab\\Updated\\chromedriver-win64\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://gmail.com/");
		Thread.sleep(2000);
		WebElement createAccount = driver.findElement(By.xpath("(//span[normalize-space()='Create account'])[1]"));
		createAccount.click();
		Thread.sleep(2000);
		WebElement mySelft = driver.findElement(By.xpath("(//span[normalize-space()='For my personal use'])[1]"));
		mySelft.click();
		Thread.sleep(2000);
		WebElement firstName = driver.findElement(By.name("firstName"));
		firstName.sendKeys("Kumar01");
		Thread.sleep(2000);
		WebElement lastName = driver.findElement(By.name("lastName"));
		lastName.sendKeys("Ravi");
		Thread.sleep(2000);
		WebElement bn1 = driver.findElement(By.xpath("(//span[normalize-space()='Next'])"));
		bn1.click();
		Thread.sleep(3000);
		  Select month = new Select(driver.findElement(By.xpath("(//select[@id='month'])[1]")));
		  month.selectByValue("8");
		  Thread.sleep(2000);
		  WebElement day = driver.findElement(By.xpath("(//input[@id='day'])[1]"));
		  day.sendKeys("24");
		  Thread.sleep(2000);
		  WebElement year = driver.findElement(By.xpath("(//input[@id='year'])[1]"));
		  year.sendKeys("1996");
		  Select gender = new
		  Select(driver.findElement(By.xpath("(//select[@id='gender'])[1]")));
		  gender.selectByValue("1");
		  Thread.sleep(2000);
		  WebElement bn2 = driver.findElement(By.xpath("(//span[normalize-space()='Next'])"));
		  bn2.click();
		  Thread.sleep(2000);
		  WebElement uid = driver.findElement(By.name("Username"));
		  uid.sendKeys("Kmrthakla");
		  WebElement bn3 = driver.findElement(By.xpath("(//span[normalize-space()='Next'])"));
		  bn3.click();
		  Thread.sleep(2000);
		  WebElement pswd = driver.findElement(By.name("Passwd"));
		  pswd.sendKeys("Cmrit123#");
		  WebElement cpswd = driver.findElement(By.name("PasswdAgain"));
		  cpswd.sendKeys("Cmrit123#");
		  WebElement bn4 = driver.findElement(By.xpath("(//span[normalize-space()='Next'])"));
		  bn4.click();
	}
	}







