using System;
using MessagePrinter;

namespace SimpleDependency
{
    class Program
    {

        static void Main(string[] args)
        {

            var service = new MessagePrintingService("The message");

            service.PrintMessage();
            Console.WriteLine("Press any key to continue!");
            Console.ReadKey();
        }
    }
}
