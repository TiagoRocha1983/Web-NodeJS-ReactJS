import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @column()
    title: string;

    @Column()
    description: string;

    @Column({
        default:false
    })
    finished: boolean;
    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    updated_at: Date;
    
}