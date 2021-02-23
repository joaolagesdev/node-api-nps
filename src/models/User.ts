import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid} from "uuid";

@Entity("users")
class User {
    
    @PrimaryColumn()
    readonly id: string;

    @Column() 
    // se o nome do atributo for diferente do nome da coluna no banco, 
    // você passa o nome da coluna como parâmetro ex:"userName"
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User }