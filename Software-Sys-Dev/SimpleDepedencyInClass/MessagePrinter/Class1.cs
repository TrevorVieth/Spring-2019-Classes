using System;
namespace MessagePrinter
{
    public class MessagePrintingService : IMessagePrinter
    {

        public string Message{get; set;} = "Default";

        public MessagePrintingService()
        {

        }

        public MessagePrintingService(string message)
        {
            this.Message = message;
        }
        
        public void PrintMessage()
        {
            Console.WriteLine(this.Message);
        }
    }
}