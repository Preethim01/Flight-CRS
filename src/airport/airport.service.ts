import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

// ✅ Correct path using process.cwd() (root of project)
const dataFilePath = path.join(process.cwd(),'src','airport', 'data', 'airport.data.json');

@Injectable()
export class AirportService {
  private ensureDataFolderExists() {
    const folderPath = path.dirname(dataFilePath);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  }

  private readData(): any[] {
    this.ensureDataFolderExists();

    try {
      if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, '[]');
      }

      const file = fs.readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(file || '[]');
    } catch (error) {
      console.error('Error reading airport data:', error);
      return [];
    }
  }

  private writeData(data: any[]) {
    this.ensureDataFolderExists();

    console.log('Writing data to:', dataFilePath); // 🔍 Debug log
    console.log('Data:', data);

    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing airport data:', error);
    }
  }

  getAll() {
    return this.readData();
  }

  getById(id: number) {
    return this.readData().find((a) => a.id === id);
  }

  create(dto: CreateAirportDto) {
    const data = this.readData();
    const newAirport = {
      id: data.length + 1,
      ...dto,
    };
    data.push(newAirport);
    this.writeData(data);
    return newAirport;
  }

  update(id: number, dto: UpdateAirportDto) {
    const data = this.readData();
    const airport = data.find((a) => a.id === id);
    if (airport) {
      Object.assign(airport, dto);
      this.writeData(data);
      return airport;
    }
    return { message: 'Airport not found' };
  }

  delete(id: number) {
    const data = this.readData();
    const index = data.findIndex((a) => a.id === id);
    if (index > -1) {
      data.splice(index, 1);
      this.writeData(data);
      return { message: 'Deleted successfully' };
    }
    return { message: 'Airport not found' };
  }
}
