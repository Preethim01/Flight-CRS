import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateCabinClassDto } from './dto/create-cabin-class.dto';

// Path to JSON data file
const dataFilePath = path.join(process.cwd(), 'src', 'cabin-class', 'data', 'cabin-class.data.json');

@Injectable()
export class CabinClassService {
  // Ensure the data folder exists
  private ensureDataFolderExists() {
    const folderPath = path.dirname(dataFilePath);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  }

  // Read data from JSON file
  private readData(): any[] {
    this.ensureDataFolderExists();

    try {
      if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, '[]');
      }

      const file = fs.readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(file || '[]');
    } catch (error) {
      console.error('Error reading cabin class data:', error);
      return [];
    }
  }

  // Write data to JSON file
  private writeData(data: any[]) {
    this.ensureDataFolderExists();

    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing cabin class data:', error);
    }
  }

  // Get all cabin classes
  getAll() {
    return this.readData();
  }

  // Get one cabin class by ID
  getById(id: number) {
    return this.readData().find(c => c.id === id);
  }

  // Create a new cabin class
  create(dto: CreateCabinClassDto) {
    const data = this.readData();

    // Duplicate name check (case-insensitive)
    const exists = data.find(c => c.name.toLowerCase() === dto.name.toLowerCase());
    if (exists) {
      return { message: 'Cabin class already exists' };
    }

    const newCabin = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
      ...dto,
    };

    data.push(newCabin);
    this.writeData(data);
    return newCabin;
  }

  // Update existing cabin class by ID
  update(id: number, dto: CreateCabinClassDto) {
    const data = this.readData();
    const cabin = data.find(c => c.id === id);

    if (!cabin) {
      return { message: 'Cabin class not found' };
    }

    const duplicate = data.find(
      c => c.name.toLowerCase() === dto.name.toLowerCase() && c.id !== id
    );
    if (duplicate) {
      return { message: 'Another cabin class with this name already exists' };
    }

    Object.assign(cabin, dto);
    this.writeData(data);
    return cabin;
  }

  // Delete a cabin class by ID
  delete(id: number) {
    const data = this.readData();
    const index = data.findIndex(c => c.id === id);

    if (index > -1) {
      data.splice(index, 1);
      this.writeData(data);
      return { message: 'Deleted successfully' };
    }

    return { message: 'Cabin class not found' };
  }
}
