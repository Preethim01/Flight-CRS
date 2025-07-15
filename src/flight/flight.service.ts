import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

const dataFilePath = path.join(process.cwd(), 'src', 'flight', 'data', 'flight.data.json');

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

  get() {
    return this.readData();
  }

  getById(id: number) {
    return this.readData().find(f => f.id === id);
  }

  create(dto: CreateFlightDto) {
    const data = this.readData();
    const newFlight = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
      ...dto,
    };
    data.push(newFlight);
    this.writeData(data);
    return newFlight;
  }

  update(id: number, dto: UpdateFlightDto) {
    const data = this.readData();
    const index = data.findIndex(f => f.id === id);

    if (index === -1) {
      return { message: 'Flight not found' };
    }

    const updatedFlight = {
      ...data[index],  // existing data
      ...dto           // overwrite with new values
    };

    data[index] = updatedFlight;
    this.writeData(data);

    return updatedFlight;
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
