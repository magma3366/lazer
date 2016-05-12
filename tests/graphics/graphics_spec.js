import test from 'ava';
import { expect } from 'chai';
import * as graphics from '../../src/graphics';

test('Graphics Library Object Definition', t => {
	const { color } = graphics;
	const { BlendModes, LinearInterpolation } = color;

	expect(color.BaseColor).to.be.a('function');
	expect(BlendModes.normal).to.be.a('function');
	expect(BlendModes.lighten).to.be.a('function');
	expect(BlendModes.darken).to.be.a('function');
	expect(BlendModes.multiply).to.be.a('function');
	expect(BlendModes.average).to.be.a('function');
	expect(BlendModes.add).to.be.a('function');
	expect(BlendModes.subtract).to.be.a('function');
	expect(BlendModes.difference).to.be.a('function');
	expect(BlendModes.negation).to.be.a('function');
	expect(BlendModes.screen).to.be.a('function');
	expect(BlendModes.exclusion).to.be.a('function');
	expect(BlendModes.overlay).to.be.a('function');
	expect(BlendModes.softLight).to.be.a('function');
	expect(BlendModes.hardLight).to.be.a('function');
	expect(BlendModes.colorDodge).to.be.a('function');
	expect(BlendModes.colorBurn).to.be.a('function');
	expect(BlendModes.linearDodge).to.be.a('function');
	expect(BlendModes.linearBurn).to.be.a('function');
	expect(BlendModes.linearLight).to.be.a('function');
	expect(BlendModes.vividLight).to.be.a('function');
	expect(BlendModes.pinLight).to.be.a('function');
	expect(BlendModes.hardMix).to.be.a('function');
	expect(BlendModes.reflect).to.be.a('function');
	expect(BlendModes.glow).to.be.a('function');
	expect(BlendModes.phoenix).to.be.a('function');
	expect(color.ColorToRGB).to.be.a('function');
	expect(color.ComponentToHex).to.be.a('function');
	expect(color.CSStoRGB).to.be.a('function');
	expect(color.GetColor).to.be.a('function');
	expect(color.GetColor32).to.be.a('function');
	expect(color.HSLtoRGB).to.be.a('function');
	expect(color.HSVColorWheel).to.be.a('function');
	expect(color.HSVtoRGB).to.be.a('function');
	expect(color.HueToColor).to.be.a('function');
	expect(LinearInterpolation.colorWithColor).to.be.a('function');
	expect(LinearInterpolation.colorWithRGB).to.be.a('function');
	expect(LinearInterpolation.RGBwithRGB).to.be.a('function');
	expect(color.RandomRGB).to.be.a('function');
	expect(color.RGBtoHSV).to.be.a('function');
	expect(color.RGBtoString).to.be.a('function');

});