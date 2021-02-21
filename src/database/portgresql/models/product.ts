import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryIds: string;

  @Column()
  displayName: string;

  @Column()
  createdAt: Date;

  @Column()
  totalRating: number;

  @Column()
  price: number;
}
