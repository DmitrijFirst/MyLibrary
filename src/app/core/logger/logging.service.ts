import { Injectable } from '@angular/core';

/*Определяем какой тип журнала вести */
export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  level: LogLevel = LogLevel.All; 
  logWithDate: boolean = true;
   
  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug,
                    optionalParams);
  }
        
  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info,
                    optionalParams);
  }
        
  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn,
                    optionalParams);
  }
        
  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error,
                    optionalParams);
  }
        
  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal,
                    optionalParams);
  }
        
  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All,
                    optionalParams);
  }
  
/*Определяется стоит ли вести логирования на основе свойства установленного уровня */
  private shouldLog(level: LogLevel): boolean {
  let ret: boolean = false;
  if ((level >= this.level &&
       level !== LogLevel.Off) ||
       this.level === LogLevel.All) {
    ret = true;
  }
  return ret;
}

  private writeToLog(msg: string,
      level: LogLevel,
      params: any[]) {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      console.log(entry.buildLogString());
    }
  }
}

//создаем строку информации и форматирования параметров в методе writeToLog () 
export class LogEntry {
   
    entryDate: Date = new Date();
    message: string = "";
    level: LogLevel = LogLevel.Debug;
    extraInfo: any[] = [];
    logWithDate: boolean = true;
        
  /*метод собирает значения из свойств класса и возвращает в
  виде одной длинной строки, для вывода в окно консоли  */
    buildLogString(): string {
      let ret: string = "";
        
      if (this.logWithDate) {
        ret = new Date() + " - ";
      }
      ret += "Type: " + LogLevel[this.level];
      ret += " - Message: " + this.message;
      if (this.extraInfo.length) {
        ret += " - Extra Info: "
          + this.formatParams(this.extraInfo);
      }
        
      return ret;
    }

    //Метод для создания разделенного запятыми списка массива параметров
        
    private formatParams(params: any[]): string {
      let ret: string = params.join(",");
      if (params.some(p => typeof p == "object")) {
        ret = "";
        for (let item of params) {
          ret += JSON.stringify(item) + ",";
        }
      }
        
      return ret;
    }
  }
  

