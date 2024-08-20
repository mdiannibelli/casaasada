import { z } from "astro:content"
import slugify from "slugify"


const projectSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    type: z.string(),
    address: z.string(),
    province: z.string(),
    locality: z.string(),
    postalcode: z.string(),
    price: z.string(),
    year: z.string(),
    images: z.array(z.string()),
    state: z.string(),
    total_land: z.string(),
    rooms: z.string(),
    bathrooms: z.string(),
    garages: z.string(),
    floors: z.string(),
    garden: z.string(),
    pool: z.string(),
    terrace: z.string(),
    elevator: z.string(),
    security: z.string()
})

const api = {
    list: async () => {
        const document = await fetch("https://docs.google.com/spreadsheets/d/1lYZNE-bqKYN6ceSsBX4uRcJTegdmwUVLWYQn8NUtG5k/pub?gid=0&single=true&output=tsv")
            .then(res => res.text())
        const rows = document.split("\n").slice(1).map(row =>  // all rows except the first
            row.trim().split("\t") // separate by |
        )

        return rows.map(row => {
            const [name, description, type, address, province, locality, postalcode, price, year, images, state, total_land, rooms, bathrooms, garages, floors, garden, pool, terrace, elevator, security] = row;
            return projectSchema.parse({
                id: slugify(name, { lower: true }),
                name,
                description,
                type,
                address,
                province,
                locality,
                postalcode,
                price,
                year,
                images: images.split(',').map(img => img.trim()),
                state,
                total_land,
                rooms,
                bathrooms,
                garages,
                floors,
                garden,
                pool,
                terrace,
                elevator,
                security
            })
        })
    }
}

export default api;