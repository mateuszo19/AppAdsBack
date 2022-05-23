import {AdRecord} from "../records/ad.record";
import exp from "constants";
import {AdEntity} from "../types";

const defaultObj = {
    name: 'Test Name',
    description: 'blah',
    url: 'hthtpasd',
    price: 0,
    lat: 9,
    lon: 9
}

test('AdRecord returns data from database for one entry', async () => {
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Testowa');
})

test('AdRecord.getOne returns null from database for unexisting entry', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
})

test('AdRecord.findAll returns array of found entries', async () => {
    const ad = await AdRecord.findAll('');

    expect(ad).not.toEqual([]);
    expect(ad[0].id).toBeDefined();
})

test('AdRecord.findAll returns array of found entries when searching for "a"', async () => {
    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})

test('AdRecord.findAll returns empty array when searching for something that does not exist', async () => {
    const ads = await AdRecord.findAll('--------------------');

    expect(ads).toEqual([]);
})

test('AdRecord.findAll returns small amount of data', async () => {
    const ads = await AdRecord.findAll('');

    expect((ads[0] as AdEntity).price).toBeUndefined();
    expect((ads[0] as AdEntity).description).toBeUndefined();
})

test('AdRecord.findAll insert new data and returns UUID', async () => {
    const ads = new AdRecord(defaultObj);

    await ad.insert();

    expect(ad.id).toBeDefined();
    expect(typeof ad.id).toBe('string');
})

test('AdRecord.findAll insert new data and returns UUID', async () => {
    const ad = new AdRecord(defaultObj);

    await ad.insert();

    const foundAd = await AdRecord.getOne(ad.id);

    expect(foundAd).toBeDefined();
    expect(foundAd).not.toBeNull();
    expect(foundAd.id).toBe(ad.id)
})
