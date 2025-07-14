import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

const dataFilePath = path.join(process.cwd(),'src','flight','data', 'flight.data.json');

@Injectable()
export class FlightService {
  private ensureDataFolderExists() {
    const folderPath = path.dirname(dataFilePath);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  }

  private readData(): any[] {
    this.ensureDataFolderExists();
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, '[]');
    }
    const content = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(content || '[]');
  }

  private writeData(data: any[]) {
    this.ensureDataFolderExists();
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  }

  getAll() {
    return this.readData();
  }

  getById(id: number) {
    return this.readData().find(f => f.id === id);
  }

  create(dto: CreateFlightDto) {
    const data = this.readData();
    const newFlight = { id: data.length + 1, ...dto };
    data.push(newFlight);
    this.writeData(data);
    return newFlight;
  }

  update(id: number, dto: UpdateFlightDto) {
    const data = this.readData();
    const flight = data.find(f => f.id === id);
    if (flight) {
      Object.assign(flight, dto);
      this.writeData(data);
      return flight;
    }
    return { message: 'Flight not found' };
  }

  delete(id: number) {
    const data = this.readData();
    const index = data.findIndex(f => f.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      this.writeData(data);
      return { message: 'Deleted successfully' };
    }
    return { message: 'Flight not found' };
  }
}
