import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
public class PdftoWord {
	public static void main(String[] args) throws InterruptedException, AWTException {
System.setProperty("webdriver.chrome.driver", "F:\\Lab\\Updated\\chromedriver-win64\\chromedriver.exe");
WebDriver driver= new ChromeDriver();
driver.get("https://www.google.com/");
Thread.sleep(2000);
WebElement searchBar = driver.findElement(By.name("q"));
searchBar.sendKeys("Convert pdf to word online");
searchBar.sendKeys(Keys.ENTER);
WebElement pdfToWord = driver.findElement(By.xpath("(//h3[@class='LC20lb MBeuO DKV0Md'])[2]"));
pdfToWord.click();
Thread.sleep(500);
WebElement chooseFileBtn = driver.findElement(By.xpath("(//span[normalize-space()='Choose Files'])[1]"));
chooseFileBtn.click();
Thread.sleep(500);	
Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
StringSelection str = new StringSelection("Downloads\\01.pdf");
clipboard.setContents(str,null);
Thread.sleep(500);
Robot robot = new Robot();
robot.keyPress(KeyEvent.VK_CONTROL);
robot.keyPress(KeyEvent.VK_V);
robot.keyPress(KeyEvent.VK_ENTER);
Thread.sleep(500);
WebElement convertToWord = driver.findElement(By.xpath("(//div[@class='sc-6ytb27-2 guQZea'])[1]"));
convertToWord.click();
WebElement choosePlan =
driver.findElement(By.xpath("(//span[@class='r5zwp6-3 iiSRjo'])[3]"));
choosePlan.click();
Thread.sleep(10000);
WebElement download = driver.findElement(By.xpath("(//span[@class='r5zwp6-3 iiSRjo'])[4]"));
download.click();
}	
}
